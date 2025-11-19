package br.com.pg360.api.controller;

import br.com.pg360.api.model.Avaliacao;
import br.com.pg360.api.repository.AvaliacaoRepository;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.parameters.RequestBody;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/avaliacoes")
@Tag(name = "Avaliações", description = "Endpoints para submissão e gerenciamento de avaliações públicas")
@CrossOrigin("http://localhost:5173")
public class AvaliacaoController {

    @Autowired
    private AvaliacaoRepository repository;

    @Operation(
            summary = "Criar avaliação",
            description = "Cria uma nova avaliação baseada em nome, email e mensagem.",
            requestBody = @RequestBody(
                    required = true,
                    description = "Dados da avaliação",
                    content = @Content(schema = @Schema(implementation = Avaliacao.class))
            )
    )
    @PostMapping
    public ResponseEntity<Avaliacao> criar(@RequestBody Avaliacao avaliacao) {
        return ResponseEntity.status(201).body(repository.save(avaliacao));
    }

    @Operation(
            summary = "Listar todas as avaliações",
            description = "Retorna todas as avaliações cadastradas."
    )
    @GetMapping
    public List<Avaliacao> listarTodas() {
        return repository.findAll();
    }

    @Operation(
            summary = "Buscar avaliação por ID",
            responses = {
                    @ApiResponse(responseCode = "200", description = "Avaliação encontrada"),
                    @ApiResponse(responseCode = "404", description = "Avaliação não encontrada")
            }
    )
    @GetMapping("/{id}")
    public ResponseEntity<Avaliacao> buscarPorId(@PathVariable Long id) {
        Optional<Avaliacao> avaliacao = repository.findById(id);
        return avaliacao.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @Operation(summary = "Atualizar avaliação existente")
    @PutMapping("/{id}")
    public ResponseEntity<Avaliacao> atualizar(@PathVariable Long id, @RequestBody Avaliacao nova) {
        return repository.findById(id)
                .map(a -> {
                    a.setNmPessoa(nova.getNmPessoa());
                    a.setEmailPessoa(nova.getEmailPessoa());
                    a.setDsAvaliacao(nova.getDsAvaliacao());
                    a.setDtAvaliacao(nova.getDtAvaliacao());
                    return ResponseEntity.ok(repository.save(a));
                })
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @Operation(
            summary = "Deletar avaliação",
            responses = {
                    @ApiResponse(responseCode = "204", description = "Avaliação removida"),
                    @ApiResponse(responseCode = "404", description = "Avaliação não encontrada")
            }
    )
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        if (repository.existsById(id)) {
            repository.deleteById(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}

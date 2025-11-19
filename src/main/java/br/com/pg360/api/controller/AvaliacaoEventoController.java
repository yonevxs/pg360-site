package br.com.pg360.api.controller;

import br.com.pg360.api.model.AvaliacaoEvento;
import br.com.pg360.api.repository.AvaliacaoEventoRepository;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/avaliacoes-evento")
@Tag(
        name = "Avaliações de Evento",
        description = "Endpoints para criação, listagem, consulta e exclusão de avaliações vinculadas a eventos."
)

@CrossOrigin(origins = "http://localhost:5173")
public class AvaliacaoEventoController {

    @Autowired
    private AvaliacaoEventoRepository repository;

    @Operation(
            summary = "Criar avaliação de evento",
            description = "Registra uma avaliação vinculada a usuário, local e evento.",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    required = true,
                    description = "JSON com dados da avaliação",
                    content = @Content(schema = @Schema(implementation = AvaliacaoEvento.class))
            ),
            responses = {
                    @ApiResponse(responseCode = "201", description = "Avaliação criada"),
            }
    )
    @PostMapping
    public ResponseEntity<AvaliacaoEvento> criar(
            @RequestBody AvaliacaoEvento avaliacao
    ) {
        return ResponseEntity.status(201).body(repository.save(avaliacao));
    }

    @Operation(summary = "Listar todas as avaliações de eventos")
    @GetMapping
    public List<AvaliacaoEvento> listarTodos() {
        return repository.findAll();
    }

    @Operation(summary = "Buscar avaliação de evento por ID")
    @GetMapping("/{id}")
    public ResponseEntity<AvaliacaoEvento> buscarPorId(@PathVariable Long id) {
        return repository.findById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @Operation(summary = "Excluir avaliação de evento")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        if (repository.existsById(id)) {
            repository.deleteById(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}

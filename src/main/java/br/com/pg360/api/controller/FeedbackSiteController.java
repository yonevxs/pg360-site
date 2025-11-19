package br.com.pg360.api.controller;

import br.com.pg360.api.model.FeedbackSite;
import br.com.pg360.api.repository.FeedbackSiteRepository;

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
@RequestMapping("/feedback")
@CrossOrigin("http://localhost:5173")

@Tag(
        name = "Avaliações do Site",
        description = "Endpoints para criação, consulta, atualização e exclusão de avaliações do site."
)

public class FeedbackSiteController {

    @Autowired
    private FeedbackSiteRepository repository;

    @Operation(
            summary = "Criar avaliação do site",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    required = true,
                    content = @Content(schema = @Schema(implementation = FeedbackSite.class))
            )
    )
    @PostMapping
    public ResponseEntity<FeedbackSite> criar(@RequestBody FeedbackSite feedbackSite) {
        return ResponseEntity.status(201).body(repository.save(feedbackSite));
    }

    @GetMapping
    public List<FeedbackSite> listarTodas() {
        return repository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<FeedbackSite> buscarPorId(@PathVariable Long id) {
        return repository.findById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<FeedbackSite> atualizar(
            @PathVariable Long id,
            @RequestBody FeedbackSite nova
    ) {
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

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        if (repository.existsById(id)) {
            repository.deleteById(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}
